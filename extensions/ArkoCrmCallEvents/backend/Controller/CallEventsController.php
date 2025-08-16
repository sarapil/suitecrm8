<?php

namespace App\Extension\ArkoCrmCallEvents\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Authentication\LegacyHandler\UserHandler;
use App\SystemConfig\Service\SystemConfigProviderInterface;

class CallEventsController extends AbstractController
{
    /**
     * @var UserHandler
     */
    protected $userHandler;

    /**
     * @var SystemConfigProviderInterface
     */
    protected $systemConfig;

    public function __construct(UserHandler $userHandler, SystemConfigProviderInterface $systemConfig)
    {
        $this->userHandler = $userHandler;
        $this->systemConfig = $systemConfig;
    }

    #[Route('/arkocrm/call-events/stream', name: 'arkocrm_call_events_stream', methods: ["GET"])]
    public function stream(Request $request): StreamedResponse
    {
        if (!$this->systemConfig->get('arkocrm.call_events.enabled')) {
            return new StreamedResponse(null, 404);
        }

        $response = new StreamedResponse();
        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');
        $response->headers->set('Connection', 'keep-alive');
        $response->headers->set('X-Accel-Buffering', 'no'); // For Nginx

        $user = $this->userHandler->getCurrentUser();

        $response->setCallback(function () use ($user) {
            while (true) {
                // Mock event
                $data = [
                    'caller_number' => '+1' . random_int(1000000000, 9999999999)
                ];

                echo "data: " . json_encode($data) . "\n\n";
                ob_flush();
                flush();

                sleep(10);
            }
        });

        return $response;
    }
}
