
const userRouter = () =>{

/**
 * Retrieve an user by id
 */
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
app.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
app.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
app.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});
}
const passwords = {
  qjabari: '1234',
  mnajar: '4321'
};

const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com'
  },
  {
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com'
  }
];

/**
 * login endpoint return a json web token
 */
app.post('/login', (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(e=> e.username === username);

  if(!user || password[username]!== password){
    res.status(400).send("incorrect username/password")
    return;
  }
  const token = jwt.sign(user, 'potato', {expiresIn: 60*5});
  res.send(token)
})
export default userRouter