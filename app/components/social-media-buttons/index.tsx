'use client';

import '@firebase/init';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Button } from 'thon-ui';

export default function SocialMediaAuth() {
  async function handleTwitterAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new TwitterAuthProvider();

    const { user: twitterUser } = await signInWithPopup(auth, provider);

    const user = {
      ...twitterUser,
      photoURL: twitterUser.photoURL?.replace('_normal', '_400x400'),
    };

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
      <Button
        variant="custom"
        className="bg-blue-400 hover:bg-blue-400/[.9] active:bg-blue-400/[.8]"
        textClassName="text-gray-50"
        onClick={handleTwitterAuth}
      >
        Entrar com Twitter
      </Button>
      <Button
        variant="custom"
        className="bg-blue-800 hover:bg-blue-800/[.9] active:bg-blue-800/[.8]"
        textClassName="text-gray-50"
        onClick={handleFacebookAuth}
      >
        Entrar com Facebook
      </Button>
      <Button
        variant="custom"
        className="bg-red-600 hover:bg-red-600/[.9] active:bg-red-600/[.8]"
        textClassName="text-gray-50"
        onClick={handleGoogleAuth}
      >
        Entrar com Google
      </Button>
    </>
  );
}
