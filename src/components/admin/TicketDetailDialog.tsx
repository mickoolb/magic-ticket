import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  DollarSign, 
  Ticket as TicketIcon,
  Fingerprint,
  Clock,
  Ban,
  AlertCircle
} from 'lucide-react';
import { Ticket } from '@/utils/ticketUtils';

interface TicketDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTicket: Ticket | null;
}

const TicketDetailDialog: React.FC<TicketDetailDialogProps> = ({ 
  open, 
  onOpenChange, 
  selectedTicket 
}) => {
  if (!selectedTicket) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Boleto: {selectedTicket.id}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-magic/10 via-white to-magic-light/20 p-4 rounded-lg shadow-lg border border-magic/30 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32">
                <img src={selectedTicket.qrCode} alt="Código QR" className="w-full h-full object-contain p-2 bg-white rounded-lg shadow-inner" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black bg-magic-light/20 px-3 py-1 rounded-md inline-block">
                  {selectedTicket.eventName}
                </h3>

            {/* Customer name display - prominently shown below event name */}
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between bg-white/80 p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-magic" />
                  <span className="text-sm font-medium text-black">Comprado por:</span>
                </div>
                <span className="font-medium text-black">{selectedTicket.customerName}</span>
              </div>

              {/* Ticket ID display - prominently shown with magical styling */}
              <div className="bg-magic/5 p-2 rounded-md border border-magic/20 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="h-4 w-4 text-magic" />
                    <span className="text-sm font-medium text-black">ID del Boleto:</span>
                  </div>
                  <span className="font-mono font-semibold text-black bg-magic-light/30 px-2 py-0.5 rounded">{selectedTicket.id}</span>
                </div>
              <p className="text-xs text-magic-dark/70 mt-1">
                Utiliza este ID para validar el boleto en el panel de administración
              </p>
            </div>

            {/* Important information section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
              <h4 className="font-medium text-yellow-800 flex items-center mb-2">
                <AlertCircle className="h-4 w-4 mr-1.5" />
                Información Importante
              </h4>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex items-start">
                  <Clock className="h-3.5 w-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
                  <p>Se recomienda llegar 15 minutos antes del evento</p>
                </div>
                <div className="flex items-start">
                  <Ban className="h-3.5 w-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
                  <p>Se prohíbe ingresar alcohol y bebidas al evento</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-white/80 p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-magic" />
                  <div>
                    <p className="text-xs text-black">Fecha del Evento</p>
                    <p className="font-medium text-black">{new Date(selectedTicket.eventDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-magic mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-magic-dark/70">Lugar</p>
                  <p className="font-medium">{selectedTicket.eventLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="h-4 w-4 text-magic mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-magic-dark/70">Asistente</p>
                  <p className="font-medium">{selectedTicket.customerName}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-magic mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-magic-dark/70">Email</p>
                  <p className="font-medium">{selectedTicket.customerEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 text-magic mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-magic-dark/70">Precio</p>
                  <p className="font-medium">${selectedTicket.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <TicketIcon className="h-4 w-4 text-magic mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-magic-dark/70">Fecha de compra</p>
                  <p className="font-medium">{new Date(selectedTicket.purchaseDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className={`h-4 w-4 mt-1 rounded-full flex-shrink-0 ${selectedTicket.used ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <div>
                  <p className="text-sm text-magic-dark/70">Estado</p>
                  <p className={`font-medium ${selectedTicket.used ? 'text-red-600' : 'text-green-600'}`}>
                    {selectedTicket.used ? 'Utilizado' : 'No utilizado'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-dashed border-magic-light/50">
              <p className="text-xs text-center text-magic-dark/70">ID: <span className="font-mono">{selectedTicket.id}</span></p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={() => onOpenChange(false)}
              className="magic-button"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketDetailDialog;