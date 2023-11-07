import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
    return (
    <>
    <Sidebar/>
   <div className='page'></div>
  <span className='tags top-tags'>&lt;body&gt;</span>

  <Outlet />

<span ClassName='tags bottom-tags' >
    &lt;/body&gt;
    <br />
    <span className='bottom-tag-html> &lt;/html&gt;</span>
</span>
</div>
}

export default Layout