import { FC } from 'react'
import { SITE_TITLE } from '@/app/config/meta';

export const Header: FC = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="inline-flex gap-x-2 items-center" href="/">
          <span className="sr-only">首页</span>
          <img src="/logo.svg" width="28" height="28" alt="logo" />

          <span className="font-bold">{SITE_TITLE}</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
         
        </div>
      </div>
    </header>
  );
}