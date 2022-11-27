const Info_card = (Icon: any, header: string, body: string, card_name: any) => {
  return (
    <section className={card_name}>
      <Icon />
      <span>{header}</span>
      <p>{body}</p>
    </section>
  );
};

export default Info_card;
