'use client';

import WideCard from './components/wide-card';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import './shared/firebase';
import { User } from './users/models/user';

export default function Home() {
  async function handleTwitterAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new TwitterAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    console.log(user);
  }

  async function handleFacebookAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    provider.addScope('public_profile');

    const { user } = await signInWithPopup(auth, provider);

    console.log(user);
  }

  async function handleGoogleAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    console.log(user);
  }

  return (
    <>
      <div className="flex gap-2">
        <button onClick={handleTwitterAuth}>Entrar com Twitter</button>
        <button onClick={handleFacebookAuth}>Entrar com Facebook</button>
        <button onClick={handleGoogleAuth}>Entrar com Google</button>
      </div>
      <WideCard />
    </>
  );
}
