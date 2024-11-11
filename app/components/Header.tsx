'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [activeTabName, setActiveTabName] = useState('홈');

  const tabData = [
    {
      btn: '일상 🏃‍♀️',
      name: '일상',
      path: '/daily',
    },
    {
      btn: '독후감 📚',
      name: '독후감',
      path: '/book',
    },
    {
      btn: '홈 🏡',
      name: '홈',
      path: '/',
    },
  ];

  useEffect(() => {
    const currentTab = tabData.find((tab) => tab.path === pathname);
    if (currentTab) {
      setActiveTabName(currentTab.name);
    }
  }, [pathname]);

  return (
    <>
      <ul className={styles.tabList}>
        {tabData.map((tab, index) => (
          <Link key={index} href={`${tab.path}`}>
            <li className={tab.name === activeTabName ? styles.activeTab : ''}>
              {tab.btn}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Header;
