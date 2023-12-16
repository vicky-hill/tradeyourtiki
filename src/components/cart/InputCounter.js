import { useState } from 'react'
import { Plus, Minus, Trash2 } from 'react-feather'

const InputCounter = ({
  deleteOnZero,
  product,
  updateQuantity,
  cartItemID,
  quantity = 1,
  setQuantity,
  iconSize = 20,
  disabled,
}) => {
  const [value, setValue] = useState(quantity);

  const handleStateChange = (calc) => {
    if (disabled) return;

    if (calc > product.quantity && calc > quantity) {
      setTimeout(() => {
        setValue(quantity);
      }, 500);
      return console.log('not enough stock')
    }
    setValue(calc);

    const payload = {
      quantity: calc,
      cartItemID,
      productID: product.productID,
    };

    updateQuantity ? updateQuantity(payload) : setQuantity(calc);
  };

  const onQuantityMinus = () => {
    if (quantity > 1) {
      handleStateChange(quantity - 1);
    }
  };

  const onQuantityChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    if (!isNaN(newValue)) {
      handleStateChange(newValue);
    } else {
      setValue(""); // Handle empty input
      handleStateChange("");
    }
  };

  const onQuantityAdd = () => {
    handleStateChange(quantity + 1);
  };

  return (
    <div className="input-counter">
      <span className="minus-btn" onClick={onQuantityMinus}>
        {deleteOnZero && quantity === 1 ? (
          <Trash2 onClick={() => deleteOnZero(product.productID)} size={15} />
        ) : (
          <Minus size={iconSize} />
        )}
      </span>
      <input
        disabled={disabled}
        value={value}
        name="qty"
        onChange={onQuantityChange}
      />
      <span className="plus-btn" onClick={onQuantityAdd}>
        <Plus size={iconSize} />
      </span>
    </div>
  );
};

export default InputCounter;
