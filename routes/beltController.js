// Get Route
router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
        //Find all users
        const users = await UserModel.find({})
        // Send JSON of all users
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

//Create new user
router.post('/', async (req, res) => {
    try{
    const newUser = new UserModel(req.body.user)

    const saved = await newUser.save()
    res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//UPDATE ROUTE to update bio
router.patch('/:id', async (req, res) => {
    try {
        //This is the payload being sent over
        const updatedUser = req.body.user
        //
        const user = await UserModel.findById(req.params.id)
        //
        //
        user.bio = updatedUser.bio
        //Save the user object
        const saved = await user.save()
        //Send the updated user
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//Show Route
router.get('/:id', async (req, res) => {
    try {
        //Find a user by the route id
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})