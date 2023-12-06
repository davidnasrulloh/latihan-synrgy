import { useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useParams, Link } from 'react-router-dom';
import useDetail from './detail.hooks';

const BookDetail = () => {
  const { id } = useParams();
  const { bookData, loadBookDetail } = useDetail(Number(id));

  useEffect(() => {
    loadBookDetail();
  }, [loadBookDetail]);

  if (!bookData) {
    return null; // Menampilkan loading spinner atau pesan lain jika data belum dimuat
  }

  return (
    <Box>
      <Link to="/">
        <Button startIcon={<ArrowBack />}>Back</Button>
      </Link>

      <Typography variant="h4" mb={2}>
        Book Detail
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Detail Information
          </Typography>

          <Typography>
            <strong>Title:</strong> {bookData.title}
          </Typography>
          <Typography>
            <strong>Author:</strong> {bookData.author}
          </Typography>
          <Typography>
            <strong>ISBN:</strong> {bookData.isbn}
          </Typography>
          <Typography>
            <strong>Publisher Year:</strong> {bookData.published_year}
          </Typography>
          <Typography>
            <strong>Genre:</strong> {bookData.genre}
          </Typography>
          <Typography>
            <strong>Total Copies:</strong> {bookData.total_copies}
          </Typography>
          <Typography>
            <strong>Copies Available:</strong> {bookData.copies_available}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Cover
          </Typography>
          {bookData.cover && (
            <img
              src={bookData.cover.secure_url}
              alt="Book Cover"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetail;
