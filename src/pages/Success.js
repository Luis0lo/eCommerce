// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  console.log(location);
  //   useEffect(() => {
  //     ga('send', 'pageview');
  //   }, [location])

  return <div>Successfull</div>;
};

export default Success;
