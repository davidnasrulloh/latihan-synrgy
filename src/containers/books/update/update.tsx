// Import statements...
import { useEffect } from 'react';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { VisuallyHiddenInput } from './update.styled';
import useAction from './update.hooks'; // Gantilah dengan nama file hooks untuk halaman update
import { Box, Stack, Switch } from '@mui/material';

interface bookId {
    bookId: number
}

export default function Update({ bookId }: bookId) {
  const {
    formValues,
    handleSubmit,
    handleUploadCover,
    loadingCover,
    loadingSubmit,
    setFormValues,
    fileItem,
    loadDataForUpdate,
  } = useAction(bookId);

  useEffect(() => {
    loadDataForUpdate(bookId);
  }, [bookId, loadDataForUpdate]);

  return (
    <CommonPage
      withBack
      component={'form'}
      title="Update Book"
      actionElement={
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loadingSubmit}
        >
          Submit
        </LoadingButton>
      }
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          width: '50%',
        }}
      >
        {/* TextField components for title, author, ISBN, etc. */}
        <LoadingButton
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
          loading={loadingCover}
        >
          Upload Book Cover
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleUploadCover}
          />
        </LoadingButton>
        {fileItem && fileItem.url && (
          <Box>
            <img
              src={fileItem.secure_url}
              alt="preview"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Box>
        )}
        <Box>
          <Stack direction={'row'} alignItems={'center'}>
            <div>Publish</div>
            <Switch
              name="published"
              title="Published"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  published: e.target.checked,
                })
              }
            />
          </Stack>
        </Box>
      </Box>
    </CommonPage>
  );
}
