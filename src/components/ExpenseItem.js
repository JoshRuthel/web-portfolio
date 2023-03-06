function ExpenseItem(props) {
  return (
    <div class="grid grid-cols-2 right-0">
      <div>
        <div class="text-white rounded-xl border border-white grid grid-cols-1 place-items-center">
          <p>{props.Date}</p>
        </div>
        <div>
          <h2 class="bg-white text-slate-800 px-4 py-2 rounded-xl mt-2">
            {props.Title}
          </h2>
        </div>
      </div>
      <div class="absolute right-30">{props.Amount}</div>
    </div>
  );
}

export default ExpenseItem;
