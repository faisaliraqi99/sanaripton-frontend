import React from 'react';

import Card from './Card';
import likeIco from '../../assets/img/chevron-up.svg';
import tazalykImg from '../../assets/img/orglogos/tazalyk.jpg';

class KanbanUser extends React.Component {
  render(){
    const todo = this.props.data.todo;
    const doing = this.props.data.doing;
    const ready = this.props.data.ready;
    return (
      <div className="kanban-container">
        <div className="kanban">
          <div className="kanban__col">
            <div className="col-first">
              <div className="col-title">К выполнению</div>
              <Card data={todo} likeIco={likeIco} tazalykImg={tazalykImg} />
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-second">
              <div className="col-title">В процессе</div>
            </div>
          </div>
          <div className="kanban__col">
            <div className="col-third">
              <div className="col-title">Готово</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default KanbanUser;