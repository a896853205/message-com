import Show from 'inner-page/weekly/show';
import Increase from 'inner-page/weekly/increase';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';

const Compose = () => {
  return (
    <>
      {/* <BreadcrumbList /> */}
      {/*这里做了antd的本地化处理*/}
      <ConfigProvider locale={zhCN}>
        <Increase />
        <Show />
      </ConfigProvider>
    </>
  );
};

export default Compose;
