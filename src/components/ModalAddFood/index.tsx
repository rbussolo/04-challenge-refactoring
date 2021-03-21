import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface FoodData{
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ModalAddProps {
  isOpen: boolean;
  setIsOpen: () => void;
  onAddFood: (food: FoodData) => void;
}

class ModalAddFood extends Component<ModalAddProps> {
  formRef: null | React.Ref<FormHandles>;

  constructor(props: ModalAddProps) {
    super(props);

    this.formRef = createRef<FormHandles>();
  }

  handleSubmit = async (data:FoodData) => {
    const { setIsOpen, onAddFood } = this.props;

    onAddFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};

export default ModalAddFood;
