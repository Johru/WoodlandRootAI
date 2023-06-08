import React, { useEffect } from 'react';
import Board from '../components/Board';
import { useSidebar } from '../contexts/SidebarContext';

export default function BoardPage() {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('TurnControlSidebar');
  }, [toggleSidebar]);
  return <Board />;
}
