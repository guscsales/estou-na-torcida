'use client';

import '@firebase/init';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import React from 'react';
import { Button } from 'thon-ui';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import { User } from '../../shared/models/user';

export default function SocialMediaAuth() {
  const { setStickerData } = React.useContext(StickerDataContext);

  React.useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth).then((result) => {
      if (result) {
        const user: User = {
          name: result.user.displayName || '',
          pictureURL:
            result.user.photoURL?.replace('_normal', '_400x400') || '',
        };

        setStickerData((prevValue) => ({ ...prevValue, user }));
      }
    });
  }, [setStickerData]);

  async function handleTwitterAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new TwitterAuthProvider();
    signInWithRedirect(auth, provider);
  }

  async function handleFacebookAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new FacebookAuthProvider();
    provider.addScope('public_profile');

    signInWithRedirect(auth, provider);
  }

  async function handleGoogleAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
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
