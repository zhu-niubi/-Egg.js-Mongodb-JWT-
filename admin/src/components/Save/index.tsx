import React from 'react';
import { Card, Link, Button } from '@arco-design/web-react';
import { IconClockCircle, IconRefresh, IconSave, IconArrowLeft } from '@arco-design/web-react/icon';
import styles from './index.module.less';
import history from '../../history';

const Save = (props) => {
    const { time, showBack, onRefresh, onSave, onBack } = props;
    const message = time ? `上次保存时间：${time}` : '暂无操作';
    const goBack = () => {
        history.goBack();
    }
    return <Card className={styles.card}>
        <div className={styles.box}>
            <Link icon={<IconClockCircle />}>
                {message}
            </Link>
            {
                showBack && <Button onClick={onBack || goBack} className={styles.btn} type='outline' icon={<IconArrowLeft />}>
                    返回
                </Button>
            }
            {
                onRefresh && <Button onClick={onRefresh} className={styles.btn} type='outline' icon={<IconRefresh />}>
                    刷新
                </Button>
            }
            {
                onSave && <Button onClick={onSave} className={styles.btn} type='primary' icon={<IconSave />}>保存</Button>
            }



        </div>
    </Card>
}


export default Save;