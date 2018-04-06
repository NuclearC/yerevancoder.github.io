import React from 'react';

export default ({ known_tags, filtered_tags, on_checkbox_toggle, clear_all }) => {
  const input_pairs = known_tags.map(name => {
    return (
      <span key={`${Math.random()}`} className={'PlainFlexRow FilterControl__FilterRow'}>
        <input
          type={'checkbox'}
          onChange={event => on_checkbox_toggle({ name, checked: event.target.checked })}
          checked={filtered_tags.has(name)}
        />
        <label className={'FilterControl__FilterLabel'}>{name}</label>
      </span>
    );
  });
  return (
    <div>
      <div className={'FilterControl'}>{input_pairs}</div>
      <input
        className={'FilterControl__ClearAllButton'}
        type={'button'}
        onClick={clear_all}
        value={'Clear all filters'}
      />
    </div>
  );
};
