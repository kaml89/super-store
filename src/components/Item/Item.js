import { useParams } from "react-router";

const Item = () => {
    const { itemId } = useParams();
    return (
        <div>{itemId}</div>
    );
};

export default Item;