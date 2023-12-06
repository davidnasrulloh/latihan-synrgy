import PrivateProvider from '../../providers/PrivateProvider';
import Dashboard from '../../layouts/dashboard';
import { BookUpdateContainer } from '../../containers/books';

export default function books() {
  return (
    <PrivateProvider>
      <Dashboard>
        <BookUpdateContainer bookId={0} />
      </Dashboard>
    </PrivateProvider>
  );
}
