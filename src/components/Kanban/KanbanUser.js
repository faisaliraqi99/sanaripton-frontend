import React from 'react';

import ModalUser from '../Modal/ModalUser';
import Card from './Card';

class KanbanUser extends React.Component {
  state = {
    modalStatus: false
  }
  modalStatusChanger = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    });
  }
  changeData = (item, field, index) => {
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
  }
  render(){
    const todo = this.props.data.todo;
    const doing = this.props.data.doing;
    const ready = this.props.data.done;
    const modalStatus = this.state.modalStatus;
    return (
    <>
        <ModalUser
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
                handleClick={this.modalStatusChanger}
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
                handleClick={this.modalStatusChanger}
                data={doing}
              />
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-third">
              <div className="col-title">Готово</div>
              <Card
                isReady
                handleClick={this.modalStatusChanger}
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