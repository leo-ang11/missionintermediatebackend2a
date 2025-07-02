import express from 'express'

import { getUser, getUserId, createUser, deleteUser, editUser, isEmailExist } from './database.js'

const app = express()

app.use(express.json())

app.get('/user', async (req, res) => {
    try {
        const user = await getUser()
        res.send(user)
        
    } catch (error) {
        console.error(error);
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const userById = await getUserId(id)
        res.send(userById)
        
    } catch (error) {
        console.error(error);
    }
})

app.post("/user", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body
        if (await isEmailExist(email)) {
            return res.status(400).json({ message: 'Email already exist' });
        }

        const userSign = await createUser(name, email, phone, password)
        res.status(201).json({
            message: 'User created successfully',
            user: userSign
        });

    } catch (error) {
        console.error(error);
    }
})

app.delete("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deleted = await deleteUser(id);

        if (deleted > 0) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.patch("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { name, phone, email } = req.body;

        const existingUser = await getUserId(id);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updated = await editUser(id, name, phone, email);
        if (updated > 0) {
            res.json({ message: 'User updated successfully' });
        } else {
            res.status(200).json({ message: 'No changes were made' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something Error!')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})