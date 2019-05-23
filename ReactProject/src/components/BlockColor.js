// import React from 'react';
// import { Tooltip } from 'antd';
// import style from './BlockColor.less';
//
// const BlockChecbox = ({ onChange, list }) => (
//   <div className={style.BlockColor} >
//     {list.map(item => (
//       <Tooltip title={item.title} key={item.key}>
//         <div className={style.item} style={{background:item.key}} onClick={() => onChange(item.key)}>
//         </div>
//       </Tooltip>
//     ))}
//   </div>
// );
//
// export default BlockChecbox;


import React from 'react';
import { Tooltip, Icon } from 'antd';
import styles from './BlockColor.less';

const Tag = ({ color, check, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);

const BlockChecbox = ({ colors, title, value, onChange }) => {
  let colorList = colors;
  if (!colors) {
    colorList = [
      {
        key: 'dust',
        color: '#F5222D',
      },
      {
        key: 'volcano',
        color: '#FA541C',
      },
      {
        key: 'sunset',
        color: '#FAAD14',
      },
      {
        key: 'cyan',
        color: '#13C2C2',
      },
      {
        key: 'green',
        color: '#52C41A',
      },
      {
        key: 'daybreak',
        color: '#1890FF',
      },
      {
        key: 'geekblue',
        color: '#2F54EB',
      },
      {
        key: 'purple',
        color: '#722ED1',
      },
    ];
  }
  console.log(value, colorList, 'colorList')
  return (
    <div className={styles.themeColor}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.colorBox}>
        {colorList.map(({ key, color }) => (
          <Tooltip key={color} title={key}>
            <Tag
              className={styles.colorBlock}
              color={color}
              check={value === color}
              onClick={() => onChange && onChange(color)}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default BlockChecbox;
