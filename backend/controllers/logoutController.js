const logoutUser = (req, res) => {
  res.json({
    message: 'Logout successful. Please delete token on client side.'
  });
};

module.exports = { logoutUser };
