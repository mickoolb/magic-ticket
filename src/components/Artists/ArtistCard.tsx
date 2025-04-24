
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { Artist } from '@/data/artists';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard = ({ artist, onClick }: ArtistCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer bg-magic-dark/60 backdrop-blur-md border border-magic/20"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full aspect-[4/3] object-contain bg-magic-dark/60"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-bold text-white">{artist.name}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
