import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-abantion/compose';
/**
 * 角色：企业管理员
 * 教务信息管理->终止培养管理
 */
const Abantion = () => {
  return (
    <>
      <Compose />
    </>
  );
};
Abantion.Layout = MyLayout;

export default Abantion;
