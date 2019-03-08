import {Carousel} from 'antd';
import styles from './index.less';

function Index(){
  let list=[
    {
      id:'0',
      title:'我是广告一号',
    },
    {
      id:'2',
      title:'我是广告二号',
    },
    {
      id:'3',
      title:'我是广告三号',
    },
    {
      id:'4',
      title:'我是广告四号',
    },
    {
      id:'5',
      title:'我是广告五号',
    },
    {
      id:'6',
      title:'我是广告六号',
    }
  ];

  let divList = [];
  let length = list.length / 2;
  for (let i = 0; i < length; i++) {
    let itemList = [];
    for (let j = i * 2; j < i * 2 + 2; j++) {
      if (list[j])
        itemList = [...itemList, list[j]];
      else
        itemList = [...itemList, {}];
    }
    if (itemList.length > 0)
      divList = [...divList, itemList];
  }
  return(
    <div className={styles.headline}>
       <div className={styles.title}>
          <b>商务</b><br/>
          <b>头条</b>
       </div>
      <div className={styles.advertise}>
        <Carousel vertical autoplay={false} dots='true'>
          {
            divList.map((s, i) =>
              <div key={i}>
                <ul>
                  {
                    s.map((s1, i) =>
                      s1.id ?
                          <li key={s1.id}> {s1.title}</li>:
                        <li key={i}></li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </Carousel>
      </div>

    </div>
  )
}

export default Index;
