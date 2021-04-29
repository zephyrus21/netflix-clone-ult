import React, { useState, useContext } from 'react';
import SelectProfileContainer from './profile';
import { FirebaseContext } from '../context/firebase';

const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebaseApp } = useContext(FirebaseContext);
  const user = firebaseApp.auth().currentUser || {};

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
};

export default BrowseContainer;
