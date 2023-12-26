import Home from "../../pages/Home";
import Login from "../../pages/Login";
import UnderConstruction from "../../pages/UnderConstruction";
import NotFoundPage from "../../pages/NotFound";

const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/forgot-password',
            element: <UnderConstruction />,
        },
        //!---------Dashboard
        {
            path: '/dashboard',
            children: [
                {
                    path: 'live-status',
                    element: <UnderConstruction />,
                },
                {
                    path: 'analytics',
                    element: <UnderConstruction />,
                },
                {
                    path: 'alarms',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Asset management
        {
            path: '/asset-management',
            children: [
                {
                    path: 'charge-stations',
                    element: <UnderConstruction />,
                },
                {
                    path: 'charge-points',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Tag management
        {
            path: '/tag-management',
            children: [
                {
                    path: 'rfid-cards',
                    element: <UnderConstruction />,
                },
                {
                    path: 'vid-cards',
                    element: <UnderConstruction />,
                }
            ]
        },

        //!---------Data management
        {
            path: '/data-management',
            children: [
                {
                    path: 'ev-chargers',
                    element: <UnderConstruction />,
                },
                {
                    path: 'ev-vehicles',
                    element: <UnderConstruction />,
                },
                {
                    path: 'manufactures',
                    element: <UnderConstruction />,
                }
            ]
        },

        //!---------Charging Network
        {
            path: '/charging-network',
            children: [
                {
                    path: 'charging-transaction',
                    element: <UnderConstruction />,
                },
                {
                    path: 'charger-logs',
                    element: <UnderConstruction />,
                },
                {
                    path: 'booking-transaction',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Accounts
        {
            path: '/accounts',
            children: [
                {
                    path: 'account-transaction',
                    element: <UnderConstruction />,
                },
                {
                    path: 'customer-list',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------CRM
        {
            path: '/crm',
            children: [
                {
                    path: 'search-customer',
                    element: <UnderConstruction />,
                },
                {
                    path: 'customer-list',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Tariff
        {
            path: '/tariff',
            children: [
                {
                    path: 'charging-tariff',
                    element: <UnderConstruction />,
                },
                {
                    path: 'assign-tariff',
                    element: <UnderConstruction />,
                },
                {
                    path: 'tax',
                    element: <UnderConstruction />,
                },

            ]
        },
        //!---------CPO
        {
            path: '/cpo-support',
            children: [
                {
                    path: 'active-session',
                    element: <UnderConstruction />,
                },
                {
                    path: 'start-remote-session',
                    element: <UnderConstruction />,
                },

            ]
        },
        //!---------Notification
        {
            path: '/notification',
            children: [
                {
                    path: 'email-notification',
                    element: <UnderConstruction />,
                },
                {
                    path: 'in-app-notification',
                    element: <UnderConstruction />,
                }

            ]
        },
        //!---------Report
        {
            path: '/report',
            element: <UnderConstruction />
        },
        //!---------Settings
        {
            path: '/settings',
            children: [
                {
                    path: 'admin-manangement',
                    element: <UnderConstruction />,
                },
                {
                    path: 'role-management',
                    element: <UnderConstruction />,
                },
                {
                    path: 'admin-activity',
                    element: <UnderConstruction />,
                },

            ]

        },
        //!---------Help
        {
            path: '/help',
            element: <UnderConstruction />
        },
        //!---------404 Not Found
        {
            path: '*',
            element: <NotFoundPage />
        },




    ]


    return routes;
}
export default RoutesConfig;