'use client';
import { Task } from '@/interfaces/Task';
import DeleteButton from './deleteButton';
import UpdateButton from './updateButton';

export default function ListElement({
  task,
  deleteFunction,
  updateFunction,
}: {
  task: Task;
  deleteFunction: Function;
  updateFunction: Function;
}) {
  return (
    <li className="pb-4">
      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-2 flex flex-col justify-center">{task.name}</p>
        <div className="flex gap-2">
          <DeleteButton deleteFunction={deleteFunction} task={task} />
          <UpdateButton updateFunction={updateFunction} task={task} />
        </div>
      </div>
    </li>
  );
}
