import { push } from 'connected-react-router'; 
import { useDispatch, useSelector } from 'react-redux';

export const useRedirect = () => {
  let path = useSelector(state => state.credit.step);
  const actualPath = useSelector(state => state.router.location.pathname);
  path = `/${path}`;
  const dispatch = useDispatch();
  if(path !== actualPath) dispatch(push(path));
}