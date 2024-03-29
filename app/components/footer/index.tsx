import React from 'react';
import Container from '../container';
import { Text } from 'thon-ui';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-28 pb-6 relative z-30 border-t border-solid border-t-gray-200 pt-3">
      <Container className="flex flex-col gap-2">
        <div
          className="flex items-center justify-center gap-0.5 mt-3"
          aria-hidden
          aria-label="Copyright Estou na Torcida criado com amor pelo Gus - UI feita com Thon Labs"
        >
          <Text
            variant="xs"
            aria-hidden
            className="text-center phone:hidden font-bold"
          >
            &copy; &quot;Estou na Torcida&quot; criado com{' '}
            <Image
              src="/images/heart.svg"
              alt="Heart"
              quality={100}
              width={16}
              height={16}
              className="w-4 h-4 inline-block -mt-1"
              aria-hidden
            />{' '}
            pelo{' '}
            <a
              href="https://canal.gsales.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Gus
            </a>{' '}
            - UI feita com{' '}
            <a
              href="https://thonlabs.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Thon Labs
            </a>
          </Text>

          <Text
            variant="xs"
            aria-hidden
            className="text-center sm:hidden font-bold"
          >
            &copy; &quot;Estou na Torcida&quot; criado com{' '}
            <Image
              src="/images/heart.svg"
              alt="Heart"
              quality={100}
              width={16}
              height={16}
              className="w-4 h-4 inline-block -mt-1"
              aria-hidden
            />{' '}
            pelo{' '}
            <a
              href="https://canal.gsales.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Gus
            </a>
            <br />
            UI feita com{' '}
            <a
              href="https://thonlabs.io"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
            >
              Thon Labs
            </a>
          </Text>
        </div>
        <Text
          as="div"
          variant="xs"
          aria-hidden
          className="text-center font-bold"
        >
          Leia nossa{' '}
          <Link
            href="/politica-de-privacidade"
            className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
          >
            Política de Privacidade
          </Link>{' '}
          - Feedbacks ou bugs{' '}
          <a
            href="https://twitter.com/guscsales"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 hover:text-emerald-400 transition-colors duration-200 ease-in-out"
          >
            entre em contato
          </a>
        </Text>
      </Container>
    </footer>
  );
}
