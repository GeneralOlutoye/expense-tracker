import { Button, Result } from 'antd';
import React from 'react';

export const ErrorPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={()=>window.location.href = "/"} type="primary">Back Home</Button>}
  />
);
