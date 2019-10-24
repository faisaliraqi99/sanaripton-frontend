import React from 'react';

import ModalUser from '../Modal/ModalUser';
import Card from './Card';
import likeIco from '../../assets/img/chevron-up.svg';
import tazalykImg from '../../assets/img/orglogos/tazalyk.jpg';

class KanbanUser extends React.Component {
  state = {
    modalStatus: false
  }
  modalStatusChanger = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    });
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
                handleClick={this.modalStatusChanger}
                data={todo}
                likeIco={likeIco}
                tazalykImg={tazalykImg}
              />
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-second">
              <div className="col-title">В процессе</div>
              <Card
                handleClick={this.modalStatusChanger}
                data={doing}
                likeIco={likeIco}
                tazalykImg={tazalykImg}
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
                likeIco={likeIco}
                tazalykImg={tazalykImg}
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