import React, { useState, useEffect } from 'react';

const AddEntityPage = () => {
    const [entity, setEntity] = useState({ name: '', description: '', userId: '' });
    const [entities, setEntities] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        // Fetch users for dropdown
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Error fetching users:', err));
        // Fetch all entities
        fetch('http://localhost:3000/api/items')
            .then(res => res.json())
            .then(data => setEntities(data))
            .catch(err => console.error('Error fetching entities:', err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntity({ ...entity, [name]: value });
    };

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...entity, userId: entity.userId }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newEntity = await response.json();
            setEntities([...entities, newEntity]);
            setEntity({ name: '', description: '', userId: '' });
        } catch (error) {
            console.error('Error adding entity:', error);
        } finally {
            setLoading(false); 
        }
    };

    // Filter entities by selected user
    const filteredEntities = selectedUser
        ? entities.filter(e => e.created_by === selectedUser || e.userId === selectedUser)
        : entities;

    return (
        <div>
            <h1>Add Entity</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={entity.name}
                    onChange={handleChange}
                    placeholder="Entity Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={entity.description}
                    onChange={handleChange}
                    placeholder="Entity Description"
                    required
                />
                <select
                    name="userId"
                    value={entity.userId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.name || user.email}</option>
                    ))}
                </select>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Add Entity'}
                </button>
            </form>
            <h2>Filter by User</h2>
            <select value={selectedUser} onChange={handleUserChange}>
                <option value="">All Users</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name || user.email}</option>
                ))}
            </select>
            <h2>Entities List</h2>
            <ul>
                {filteredEntities.map((e, index) => (
                    <li key={index}>{e.name} - {e.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddEntityPage;