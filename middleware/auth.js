exports.authenticateUser = (req, res, next) => {
    console.log('Authenticating user session:', req.session);
    if (req.session && req.session.user) {
      console.log('User authenticated:', req.session.user);
      req.user = req.session.user; // Attach user to req object
      next();
    } else {
      console.log('User not authenticated');
      res.status(401).json({ message: 'Authentication required. Please log in.' });
    }
  };
  