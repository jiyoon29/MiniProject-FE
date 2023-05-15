import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import UserMain from '../../components/UserMainPage';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';
import Admin from './admin';
import { RootState } from '../../store';

function HomePage() {
  // 유저 가져오기
  const user = useSelector((state: RootState) => state.loginedUser.role);

  return (
    <div>
      <Header />
      {user === 'ROLE_USER' ? <UserMain /> : <Admin />}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
