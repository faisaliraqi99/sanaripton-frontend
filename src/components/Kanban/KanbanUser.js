import React from 'react';

import ModalUser from '../Modal/ModalUser';
import Card from './Card';

class KanbanUser extends React.Component {
  state = {
    modalStatus: false,
    modalData: {}
  }
  handleCardClick = (item, index) => {
    this.modalStatusChanger(item, index, true);
  }
  modalStatusChanger = (item, index, isUpdate = false) => {
    const itemWithIndex = {...item, index};
    this.setState({
      modalStatus: isUpdate ? true : false,
      modalData: itemWithIndex,
    });
  }
  changeData = (item, field, index, type) => {
    const newData = {...this.props.data}
    const status = item.status;

    let likedField = JSON.parse(localStorage.getItem('liked'));
    let liked = false;

    if (likedField === null) {
      localStorage.setItem('liked', JSON.stringify([]))
      likedField = JSON.parse(localStorage.getItem('liked'));
    } else {
      likedField.forEach(element => {
        if (element === item.id) liked = true
      });
    }

    if (liked) return null
    else likedField.push(item.id);
    localStorage.setItem('liked', JSON.stringify(likedField))

    if(status === 1) ++newData.todo[index][field]
    else if(status === 2) ++newData.doing[index][field]
    else if (status === 3) ++newData.done[index][field]

    this.props.changeData(newData);
    let newItem = null;

    switch (`${status}`){
      case '1': newItem = newData.todo[index]
      break;
      case '2': newItem = newData.doing[index]
      break;
      case '3': newItem = newData.done[index]
      break;
      default: return
    }
    // ТЕСТИМ
    this.modalStatusChanger(newItem, index, type === 'card' ? false : true);
  }
  render(){
    const todo = this.props.data.todo;
    const doing = this.props.data.doing;
    const ready = this.props.data.done;
    const modalStatus = this.state.modalStatus;
    const modalData = this.state.modalData;
    return (
    <>
        <ModalUser
          data={modalData}
          changeData={this.changeData}
          modalStatusChanger={this.modalStatusChanger}
          modalStatus={modalStatus}
        />
      <div style={modalStatus ? { filter: 'blur(20px)' } : {} } className="kanban-container" >
        <div className="kanban">
          <div className="kanban__col">
            <div className="col-first">
              <div className="col-title">К выполнению</div>
              <Card
                isTodo
                changeData={this.changeData}
                handleClick={this.handleCardClick}
                data={todo}
              />
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-second">
              <div className="col-title">В процессе</div>
              <Card
                isDoing
                changeData={this.changeData}
                handleClick={this.handleCardClick}
                data={doing}
              />
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-third">
              <div className="col-title">Готово</div>
              <Card
                isReady
                handleClick={this.handleCardClick}
                data={ready}
              />
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default KanbanUser;