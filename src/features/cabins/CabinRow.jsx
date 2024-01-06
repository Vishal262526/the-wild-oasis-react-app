import styled from "styled-components";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  object-position: center;
  transform: scale(1.5) translate(-7px);
`;

const Cabin = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 500;
  color: var(--color-grey-700);
`;

const CabinRow = ({ cabin }) => {
  const queryClient = useQueryClient();
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      alert("Cabin successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>Rs {regularPrice}</Price>
      <Discount>Rs {discount}</Discount>
      <button disabled={isDeleting} onClick={() => mutate(id)}>
        Delete
      </button>
    </TableRow>
  );
};

CabinRow.propType = {
  cabin: PropTypes.object.isRequired,
};

export default CabinRow;
