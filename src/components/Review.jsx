

// imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback
const Review = ({ review: { imgURL, customerName,  feedback } }) => {
    return (
      <div className="text-center">
        <img
          src={imgURL}
          alt={customerName}
          className="rounded-full object-cover block mb-3 mx-auto w-32 h-32 "
        />
        <h2 className="font-palanquin text-3xl font-extrabold gradient-text">
          {customerName}
        </h2>
        <p className="info-text w-10/12 mx-auto">{feedback}</p>
      </div>
    );
};

export default Review