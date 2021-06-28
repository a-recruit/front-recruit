import React from 'react'

export default function agenda() {
    return (
        <>
            <div id='fullDiv' >
                <ul>
                    <li>LUN</li>
                    <li>MAR</li>
                    <li>MER</li>
                    <li>JEU</li>
                    <li>VEN</li>
                    <li>SAM</li>
                    <li>DIM</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <style jsx>{`
                html, body {
                    height: 100%;
                    width: 90%;
                    margin: 0;
                    padding: 0;
                    font-size: 0.8em;
                }
                
                #fullDiv {
                    margin: 2em auto;
                    padding: 0;
                    overflow: hidden; 
                }
                
                ul {
                    margin: 0;
                    padding: 0;
                }
                
                li {
                    float: left;
                    display: block;
                    width: 14.2857%;
                    text-align: center;
                    list-style-type: none;
                }
                
                li:nth-child(n+1):nth-child(-n+7) {
                    font-weight: 900;
                    color: var(--color-primary-light);
                }
                
                li:nth-child(n+39), li:nth-child(n+8):nth-child(-n+16) {
                    font-weight: 900;
                    color: rgba(0,0,0,.3);
                }
                
                li:hover:nth-child(n+8):nth-child(-n+38), li:nth-child(17){
                    border-radius: 5px;
                    background-color: #1abc9c;
                    color: #ecf0f1;
                }
            
            `}</style>
        </>

    )
}
