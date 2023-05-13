import React from 'react';
import Admin from '../../components/AdminPage/Admin';
import PageTitle from '../../components/common/PageTitle';
import { useSelector } from 'react-redux';

function AdminPage() {
  const user = useSelector((state: any) => state.loginedUser);
  let pageTitle = '사원 연차 관리';
  if (user.role === 'ROLE_ADMIN') {
    pageTitle = '사원 연차 관리';
  
  } else if (user.role === 'ROLE_MASTER') {
    pageTitle = '사원 관리';
  }
  return (
    <div>
      <PageTitle title={pageTitle} />
      <Admin />
    </div>
  );
}
export default AdminPage;
