/** @jsx jsx */
import React from 'react'
import { Flex, Grid, jsx, Spinner } from 'theme-ui'
import { useEffect, useState } from 'react'
import { darken } from '@theme-ui/color'

const myHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
})

export default function MySpotifyData() {
  const [topTracksResponse, setTopTracksResponse] = useState(null)
  const [topArtistsResponse, setTopArtistsResponse] = useState(null)
  const [spotifyDataLoading, setSpotifyDataLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setSpotifyDataLoading(true)
    fetch(`${process.env.GATSBY_API_URL}/api/getSpotifyData`, {
      headers: myHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTopTracksResponse(data.topTracksResponseData)
        setTopArtistsResponse(data.topArtistsResponseData)
      })
      .catch(() => setError('There was an error reaching Spotify.'))
      .finally(() => {
        setSpotifyDataLoading(false)
      })
  }, [])

  if (spotifyDataLoading) {
    return (
      <Flex
        sx={{
          minHeight: '194px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner />
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex sx={{ justifyContent: 'center' }}>
        <p>{error}</p>
      </Flex>
    )
  }

  return (
    <React.Fragment>
      <h6 sx={{ marginTop: 0 }}>Artists</h6>
      {topArtistsResponse?.success ? (
        <React.Fragment>
          <p>
            The six artists I've been listening to the most over the past 6
            months
          </p>
          <Grid
            sx={{
              padding: 0,
              gridGap: [1, null, 2],
              gridAutoFlow: 'row',
              gridTemplateColumns: [
                'repeat(2, minmax(0, 1fr))',
                null,
                'repeat(6, minmax(0, 1fr))',
              ],
              justifyContent: 'space-between',
              mb: 4,
            }}
          >
            {topArtistsResponse.data.map(artist => (
              <Flex
                key={artist.artistName}
                as='a'
                href={artist.artistLinks.spotify}
                rel='noopener noreferrer'
                target='_blank'
                sx={{
                  p: [1, null, 2],
                  height: '100%',
                  width: '100%',
                  flexDirection: ['row', null, 'column'],
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <img
                  src={artist.artistImages[1].url}
                  alt={`${artist.artistName} Artwork`}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '0.25rem',
                    height: ['48px', null, '64px'],
                    width: ['48px', null, '64px'],
                    minHeight: '48px',
                    minWidth: '48px',
                  }}
                />
                <p
                  sx={{
                    fontWeight: 500,
                    textAlign: ['left', null, 'center'],
                    overflow: 'hidden',
                    display: '-webkit-box',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': '2',
                  }}
                >
                  {artist.artistName}
                </p>
              </Flex>
            ))}
          </Grid>
        </React.Fragment>
      ) : (
        <p>There was a problem fetching top artists.</p>
      )}
      <h6>Tracks</h6>
      {topTracksResponse?.success ? (
        <React.Fragment>
          <p>My ten(ish) most recently listened-to tracks</p>
          <Grid
            sx={{
              gridAutoFlow: 'row',
              gridTemplateColumns: ['repeat(1, 1fr)', null, 'repeat(2, 1fr)'],
              gap: [2, null, 2],
            }}
          >
            {topTracksResponse.data.map(track => {
              return (
                <Flex
                  key={track.trackName}
                  as='a'
                  href={track.trackUrls.spotify}
                  rel='noopener noreferrer'
                  target='_blank'
                  sx={{
                    p: [1, null, 2],
                    gap: 3,
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: darken('darkCard', 0.1),
                      transition: 'background-color 0.3s',
                    },
                  }}
                >
                  <img
                    src={track.trackImages[1].url}
                    alt={`${track.trackName} Artwork`}
                    sx={{
                      objectFit: 'cover',
                      borderRadius: '0.25rem',
                      height: ['48px', null, '64px'],
                      width: ['48px', null, '64px'],
                      minHeight: '48px',
                      minWidth: '48px',
                    }}
                  />
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <p
                      sx={{
                        margin: 0,
                        fontSize: 1,
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      {track.trackName}
                    </p>
                    <p sx={{ margin: 0, fontSize: 0 }}>
                      {track.artistsOnTrack.map((artist, index, artistsArr) => {
                        if (
                          artistsArr.length > 1 &&
                          index < artistsArr.length - 1
                        ) {
                          return `${artist.name}, `
                        } else {
                          return `${artist.name}`
                        }
                      })}
                    </p>
                  </Flex>
                </Flex>
              )
            })}
          </Grid>
        </React.Fragment>
      ) : (
        <p>There was an error fetching top tracks.</p>
      )}
    </React.Fragment>
  )
}
