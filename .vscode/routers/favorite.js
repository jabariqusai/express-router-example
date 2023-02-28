

const favoriteRouter = ()=>{


app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});
}

export default favoriteRouter