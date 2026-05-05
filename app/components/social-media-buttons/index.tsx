'use client';

import '@firebase/init';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import React from 'react';
import type { Dictionary } from '../../i18n/format';
import { translate } from '../../i18n/format';
import { Button } from '../ui';
import { StickerDataContext } from '../../providers/sticker-data-providers/index';
import { User } from '../../shared/models/user';

type Props = {
  dictionary: Dictionary;
};

export default function SocialMediaAuth({ dictionary }: Props) {
  const { setStickerData } = React.useContext(StickerDataContext);

  async function handleTwitterAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new TwitterAuthProvider();

    try {
      const { user: twitterUser } = await signInWithPopup(auth, provider);

      const user: User = {
        name: twitterUser.displayName || '',
        pictureURL: twitterUser.photoURL?.replace('_normal', '_400x400') || '',
      };

      setStickerData((prevValue) => ({ ...prevValue, user }));

      localStorage.setItem('authUser', JSON.stringify(user));

      gtag('event', 'login', {
        method: 'twitter',
      });
    } catch (e) {
      gtag('event', 'login_error', { error: e, method: 'twitter' });
    }
  }

  async function handleFacebookAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    provider.addScope('public_profile');

    try {
      const { user: facebookUser } = await signInWithPopup(auth, provider);

      const user: User = {
        name: facebookUser.displayName || '',
        pictureURL: facebookUser.photoURL || '',
      };

      setStickerData((prevValue) => ({ ...prevValue, user }));
      localStorage.setItem('authUser', JSON.stringify(user));

      gtag('event', 'login', {
        method: 'facebook',
      });
    } catch (e) {
      gtag('event', 'login_error', { error: e, method: 'facebook' });
    }
  }

  async function handleGoogleAuth() {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const provider = new GoogleAuthProvider();

    try {
      const { user: googleUser } = await signInWithPopup(auth, provider);

      const user: User = {
        name: googleUser.displayName || '',
        pictureURL: googleUser.photoURL || '',
      };

      setStickerData((prevValue) => ({ ...prevValue, user }));
      localStorage.setItem('authUser', JSON.stringify(user));

      gtag('event', 'login', {
        method: 'google',
      });
    } catch (e) {
      gtag('event', 'login_error', { error: e, method: 'google' });
    }
  }

  return (
    <>
      <Button
        variant="custom"
        className="bg-blue-400 hover:bg-blue-400/[.9] active:bg-blue-400/[.8]"
        textClassName="text-gray-50"
        onClick={handleTwitterAuth}
      >
        {translate(dictionary, 'social.twitter')}
      </Button>
      <Button
        variant="custom"
        className="bg-blue-800 hover:bg-blue-800/[.9] active:bg-blue-800/[.8]"
        textClassName="text-gray-50"
        onClick={handleFacebookAuth}
      >
        {translate(dictionary, 'social.facebook')}
      </Button>
      <Button
        variant="custom"
        className="bg-red-600 hover:bg-red-600/[.9] active:bg-red-600/[.8]"
        textClassName="text-gray-50"
        onClick={handleGoogleAuth}
      >
        {translate(dictionary, 'social.google')}
      </Button>
    </>
  );
}
