import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return(
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Mario Plan</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state.firebase.profile);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar);