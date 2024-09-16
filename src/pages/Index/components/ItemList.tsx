import { typeList } from "@/types/typeApiList.ts";
import { Link } from "react-router-dom";
import styles from '@/pages/index/index.module.scss';

interface ItemListProps {
    items: typeList[];
}

const ItemList = ({ items }: ItemListProps) => {
    const listItems = items.map((item) => (
        <Link
            className={styles.box}
            key={item.id}
            to={`/doc/${item.id}`}
        >
            {item.name}
        </Link>
    ));
    return (
        <div className={styles.boxs}>
            {listItems}
        </div>
    )
}

export default ItemList

