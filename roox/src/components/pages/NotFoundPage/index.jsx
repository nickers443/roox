import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <div>Страница не найдена <Link to='/'>Назад</Link></div>;
}
